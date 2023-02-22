# Syllable counter

Count and display the number of syllables per line in the active document.

## Status

| Source     | Shields                                                                |
| ---------- | ---------------------------------------------------------------------- |
| Project    | ![latest_release] ![license] ![line_count] ![language_count]           |
| Health     | ![documentation] ![review_action] ![codacy_quality] ![codacy_coverage] |
| Publishers | ![npm_version] ![npm_downloads]                                        |
| Repository | ![open_issues] ![closed_issues] ![open_pulls] ![closed_pulls]          |
| Activity   | ![contributors] ![monthly_commits] ![last_commit]                      |

## Usage

![example](./docs/example.gif)

## Tests

To run tests:

```bash
nps test
```

## Documentation

This repository's documentation is hosted on [Read the Docs](https://syllable-counter.readthedocs.io/en/latest).

To generate the documentation locally:

```bash
quickdocs
```

## Linters

To run linters:

```bash
nps lint
```

## Formatters

To run formatters:

```bash
nps format
```

## Continuous integration

This repository uses GitHub Actions to lint and test each commit. Each commit should be formatted and its corresponding documentation should be updated.

## Versioning

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [semver](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [changelog](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [contributing](CONTRIBUTING.md) for details on the process for submitting pull requests. Moreover, our [code of conduct](CODE_OF_CONDUCT.md) declares our collaboration standards.

## Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<p align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</p>

[latest_release]: https://img.shields.io/github/v/tag/joellefkowitz/syllable-counter "Latest release"
[license]: https://img.shields.io/github/license/joellefkowitz/syllable-counter "License"
[line_count]: https://img.shields.io/tokei/lines/github/joellefkowitz/syllable-counter "Line count"
[language_count]: https://img.shields.io/github/languages/count/joellefkowitz/syllable-counter "Language count"
[documentation]: https://img.shields.io/readthedocs/syllable-counter "Documentation"
[review_action]: https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/syllable-counter/review.yml "Review action"
[codacy_quality]: https://img.shields.io/codacy/grade/f5f5ce45a1594391abde33a206f53d84 "Codacy quality"
[codacy_coverage]: https://img.shields.io/codacy/coverage/f5f5ce45a1594391abde33a206f53d84 "Codacy coverage"
[npm_version]: https://img.shields.io/npm/v/syllable-counter "NPM Version"
[npm_downloads]: https://img.shields.io/npm/dw/syllable-counter "NPM Downloads"
[open_issues]: https://img.shields.io/github/issues/joellefkowitz/syllable-counter "Open issues"
[closed_issues]: https://img.shields.io/github/issues-closed/joellefkowitz/syllable-counter "Closed issues"
[open_pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/syllable-counter "Open pull requests"
[closed_pulls]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/syllable-counter "Closed pull requests"
[contributors]: https://img.shields.io/github/contributors/joellefkowitz/syllable-counter "Contributors"
[monthly_commits]: https://img.shields.io/github/commit-activity/m/joellefkowitz/syllable-counter "Monthly commits"
[last_commit]: https://img.shields.io/github/last-commit/joellefkowitz/syllable-counter "Last commit"
