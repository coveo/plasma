#!/bin/bash
rm -rf styleguide || exit 0;
npm install
npm run styleguide
