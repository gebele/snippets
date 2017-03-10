#!/bin/bash
# substitutes playlist with local paths

DIR=${PWD}
FILE=$1
$(sed -i.bak 's|.*snippets|'"$DIR"'|g' $FILE)
