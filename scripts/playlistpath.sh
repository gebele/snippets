#!/bin/bash
# substitutes playlist with local paths

DIR=${PWD}
FILE=$1
$(sed -i '' 's|.*snippets|'"$DIR"'|g' $FILE)
