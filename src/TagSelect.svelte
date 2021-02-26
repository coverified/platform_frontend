<script>
    import { gql } from '@apollo/client'
    import { query } from 'svelte-apollo'
    export let selected = false
    export let textDefault = 'Schlagwort Filter'
    export let textAll = 'Alle Schlagworte'

    const allTags = query(gql`
        {
            allTags(sortBy: name_ASC) {
                name
                id
            }
        }
    `)
</script>

<div class="search__container">
    <p class="text-muted">Suche</p>
    <div class="search__input">
        <button class="btn btn--active">Digitalisierung</button>
    </div>
    <hr />
    <div class="search__tags">
        <div class="search__tags-controls">
            <p class="text-primary active">Digitalisierung</p>
            <p>Format</p>
            <p>Zeitraum</p>
            <p>Ministerien</p>
        </div>
        <p class="filteroptionen">Filteroptionen +</p>
        <button class="btn">5G Netze</button>
        <button class="btn">Digitale Kompetenz</button>
        <button class="btn">Digitalpolitik</button>
        <button class="btn">Digitalisierung und Bildung</button>
        <button class="btn">Digitale Transformation in der Wirtschaft</button>
        <button class="btn">Künstliche Intelligenz</button>
        <button class="btn">Industrie 4.0</button>
        <button class="btn">Internet der Dinge</button>
        <button class="btn">IT-Sicherheit</button>
        <button class="btn">Start-Ups</button>
        <button class="btn bg-primary">CoVerified</button>
    </div>
</div>

<style type="text/scss">
    .search {
        &__container {
            background-color: #eeeff1;
            padding: 15px 30px 40px 45px;
        }

        &__input {
            position: relative;
            width: 100%;

            &:after {
                content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDUwMC4wMDAwMSA1MDAuMDAwMDEiCiAgIGlkPSJzdmc0MTYyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlNlYXJjaF9JY29uLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQxNjQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2VlZWZmMSIKICAgICBib3JkZXJjb2xvcj0iIzk3OTc5NyIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuOTU0IgogICAgIGlua3NjYXBlOmN4PSIyNTAiCiAgICAgaW5rc2NhcGU6Y3k9IjI1MCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcwNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDE2NyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNTUyLjM2MjE2KSI+CiAgICA8ZwogICAgICAgaWQ9ImcxNDAwIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQuMzYwOTc5MywtNy42NzA0Nzg1KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNDcxNCIKICAgICAgICAgZD0iTSAyMzIuODM5NTIsNjE0Ljk2NzAyIEEgMTU0LjA0ODE2LDE1NC4wNDc5NCAwIDAgMCA3OC43OTE1Myw3NjkuMDEzODIgMTU0LjA0ODE2LDE1NC4wNDc5NCAwIDAgMCAyMzIuODM5NTIsOTIzLjA2MTg0IDE1NC4wNDgxNiwxNTQuMDQ3OTQgMCAwIDAgMzg2Ljg4NzUxLDc2OS4wMTM4MiAxNTQuMDQ4MTYsMTU0LjA0Nzk0IDAgMCAwIDIzMi44Mzk1Miw2MTQuOTY3MDIgWiBtIDAsMjYuNzc2MTMgQSAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMzYyLjc5ODMyLDc2OS4wMTM4MiAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMjMyLjgzOTUyLDg5Ni4yODQ0OSAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMTAyLjg4MTk0LDc2OS4wMTM4MiAxMjkuOTU4MzIsMTI3LjI3MDcgMCAwIDEgMjMyLjgzOTUyLDY0MS43NDMxNSBaIgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6Izk3OTc5NztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICA8cmVjdAogICAgICAgICByeT0iMTguMDgzNDIiCiAgICAgICAgIHJ4PSIzMy4yNDk0NDMiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNjUzMTY3NjgsMC43NTcyMTMzLC0wLjYwNjg5MDUxLDAuNzk0Nzg1NDUsMCwwKSIKICAgICAgICAgeT0iMzE5LjU1NDMyIgogICAgICAgICB4PSI3OTQuODc3NSIKICAgICAgICAgaGVpZ2h0PSIzNi4xNjY4NCIKICAgICAgICAgd2lkdGg9IjE3My4wMjY3NSIKICAgICAgICAgaWQ9InJlY3Q0NzIxIgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6Izk3OTc5NztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==');
                position: absolute;
                right: 5px;
                bottom: 5px;
            }
        }

        &__tags {
            &-controls {
                display: flex;
                align-items: center;
                font-size: 24px;

                > p {
                    position: relative;

                    &:not(:last-of-type) {
                        margin-right: 80px;
                    }

                    &:after {
                        content: '⌵';
                        position: absolute;
                        font-size: 40px;
                        width: auto;
                        height: auto;
                        right: -35px;
                        color: #000;
                        top: -9px;
                    }

                    &.active {
                        &:after {
                            transform: rotate(180deg);
                            top: 8px;
                        }
                    }
                }
            }
        }
    }

    .text-primary {
        color: #0470ad;
    }

    .text-muted {
        font-size: 1rem;
        color: #004b76;
        margin-bottom: 22px;
    }

    hr {
        margin-top: 11px;
        margin-bottom: 18px;
        background-color: #979797;
        padding-left: 2px;
    }

    .btn {
        padding: 8px 14px;
        background-color: #bec5c9;
        border: solid 1px #bec5c9;
        font-size: 18px;
        margin: 0px 10px 10px 0;
        border-radius: 3px;
    }

    .btn--active {
        position: relative;
        background-color: #0470ad;
        border: solid 1px #0470ad;
        padding-right: 40px;
        color: #fff;
        margin-bottom: 0;
        font-family: inherit;

        &:after {
            content: 'x';
            position: absolute;
            right: 0;
            padding-right: 12px;
        }
    }

    .bg-primary {
        background-color: #3b55f2;
        border: solid 1px #3b55f2;
        color: var(--color-text-on-primary);
    }

    .filteroptionen {
        display: none;
        font-size: 24px;
        letter-spacing: 0.53px;
        color: #000;
        margin-bottom: 0;
        margin-top: 21px;
        margin-bottom: 28px;
    }

    @media (max-width: 992px) {
        .search {
            &__container {
                padding: 26px 12px 22px 24px;
            }

            &__tags {
                &-controls {
                    display: none;
                }
            }
        }

        .filteroptionen {
            display: block;
        }
    }

    @media (max-width: 768px) {
    }
</style>
