import express from 'express'

const router = express.Router()

// GET /api/github/:username — proxy GitHub GraphQL API
router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params
        const year = parseInt(req.query.year) || new Date().getFullYear()
        const token = process.env.GITHUB_TOKEN

        if (!token) {
            return res.status(500).json({ error: 'GitHub token not configured' })
        }

        const from = `${year}-01-01T00:00:00Z`
        const to = `${year}-12-31T23:59:59Z`

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `query($username: String!, $from: DateTime!, $to: DateTime!) {
                    user(login: $username) {
                        followers { totalCount }
                        repositories(privacy: PUBLIC) { totalCount }
                        contributionsCollection(from: $from, to: $to) {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        contributionCount
                                        date
                                        weekday
                                    }
                                }
                            }
                            startedAt
                            endedAt
                        }
                    }
                }`,
                variables: { username, from, to },
            }),
        })

        if (!response.ok) {
            return res.status(response.status).json({ error: `GitHub API error: ${response.status}` })
        }

        const data = await response.json()

        if (data.errors) {
            return res.status(400).json({ errors: data.errors })
        }

        res.json({
            year,
            collection: data.data.user.contributionsCollection,
            followers: data.data.user.followers.totalCount,
            publicRepos: data.data.user.repositories.totalCount,
        })
    } catch (error) {
        console.error('Error fetching GitHub data:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

export default router
