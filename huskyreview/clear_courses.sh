#!/bin/sh

# To avoid unnecessary polling of the Banweb API, we
# only refresh the course reference if this database
# is empty before the backend server starts running.
mongo --eval "db.courses.deleteMany({})" huskyreview
