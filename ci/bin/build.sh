#!/bin/bash

###
# Run build tasks.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

node ./ci/bin/render/render_bud.js

bash ./ci/bin/doc/doc_readme.sh
bash ./ci/bin/build/build_examples.sh

