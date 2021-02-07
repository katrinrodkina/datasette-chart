# datasette-chart

[![PyPI](https://img.shields.io/pypi/v/datasette-chart.svg)](https://pypi.org/project/datasette-chart/)
[![Changelog](https://img.shields.io/github/v/release/katrinrodkina/datasette-chart?include_prereleases&label=changelog)](https://github.com/katrinrodkina/datasette-chart/releases)
[![Tests](https://github.com/katrinrodkina/datasette-chart/workflows/Test/badge.svg)](https://github.com/katrinrodkina/datasette-chart/actions?query=workflow%3ATest)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/katrinrodkina/datasette-chart/blob/main/LICENSE)

ChartJS

## Installation

Install this plugin in the same environment as Datasette.

    $ datasette install datasette-chart

## Usage

Usage instructions go here.

## Development

To set up this plugin locally, first checkout the code. Then create a new virtual environment:

    cd datasette-chart
    python3 -mvenv venv
    source venv/bin/activate

Or if you are using `pipenv`:

    pipenv shell

Now install the dependencies and tests:

    pip install -e '.[test]'

To run the tests:

    pytest
