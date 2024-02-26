#!bin/sh


if [[ $1  = "--path" ]]; then
  generate-react component ${1} ${2} ${3}
  else
  generate-react component ${1} 
fi 
