# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.4] - 2021-01-18
### Updated
- Simplify buffer geojson before union
- Better logging
- Documentation improvements
- Dependency updates

## [2.0.3] - 2020-12-10
### Updated
- Dependency updates (fixes https://github.com/advisories/GHSA-qqgx-2p2h-9c37)

## [2.0.2] - 2020-12-05
### Updated
- Better documentation on processing multiple agencies
- Dependency updates

## [2.0.1] - 2020-11-19
### Changed
- Better dissolve with polygon-clipping library
### Fixed
- Support for multi agency import

## [2.0.0] - 2020-11-19
### Added
- New export types: envelope, convex, lines, lines-buffer, lines-dissolve, stops, stops-buffer, stops-dissolve, lines-and-stops.
### Changed
- Changed config options

## [1.0.5] - 2020-11-10
### Added
- Better geoJSON merge
### Fixed
- Handle no config.coordinatePrecision

## [1.0.4] - 2020-10-13
### Added
- Support for extended GTFS route types

## [1.0.3] - 2020-10-13
### Updated
- Dependency updates
### Fixed
- Improved error logging

## [1.0.2] - 2020-09-12
### Updated
- Dependency updates
### Fixed
- Improved logging and config parsing

## [1.0.1] - 2020-09-10
### Updated
- Dependency updates

## [1.0.0] - 2020-08-20
### Updated
- Use node-gtfs 2.0.0 with SQLite
- Remove mongoDB
- Documentation updates

## [0.5.4] - 2020-07-15
### Updated
- Dependency updates

## [0.5.3] - 2020-06-28
### Updated
- Better mongo connection details
### Fixed
- Improved error handling for geojson simplification

## [0.5.2] - 2020-06-04
### Added
- Improved geojson simplification from turfjs
### Updated
- Dependency updates

## [0.5.1] - 2020-05-10
### Updated
- Dependency updates

## [0.5.0] - 2019-02-28
### Added
- Changelogs

### Changed
- Updated dependencies to fix issue with geojson consolidation
