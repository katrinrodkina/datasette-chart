from setuptools import setup
import os

VERSION = "0.1"


def get_long_description():
    with open(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md"),
        encoding="utf8",
    ) as fp:
        return fp.read()


setup(
    name="datasette-chart",
    description="ChartJS",
    long_description=get_long_description(),
    long_description_content_type="text/markdown",
    author="Katrina R",
    url="https://github.com/katrinrodkina/datasette-chart",
    project_urls={
        "Issues": "https://github.com/katrinrodkina/datasette-chart/issues",
        "CI": "https://github.com/katrinrodkina/datasette-chart/actions",
        "Changelog": "https://github.com/katrinrodkina/datasette-chart/releases",
    },
    license="Apache License, Version 2.0",
    version=VERSION,
    packages=["datasette_chart"],
    entry_points={"datasette": ["chart = datasette_chart"]},
    install_requires=["datasette"],
    extras_require={"test": ["pytest", "pytest-asyncio"]},
    tests_require=["datasette-chart[test]"],
    package_data={
        "datasette_chart": ["templates/*", 'static/*']
    },
    python_requires=">=3.6",
)
