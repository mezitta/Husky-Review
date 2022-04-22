#!/bin/sh

# Erase everything.
mongo --eval "db.reviews.deleteMany({})" huskyreview
