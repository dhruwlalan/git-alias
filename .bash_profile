source ~/.terminal-config/git-prompt.sh
source ~/.terminal-config/git-completion.bash

# Define some colors for the terminal to use
black="\[\033[90m\]"
red="\[\033[91m\]"
green="\[\033[38;5;82m\]"
yellow="\[\033[38;5;226m\]"
blue="\[\033[94m\]"
magenta="\[\033[95m\]"
pink="\[\033[38;5;197m\]"
cyan="\[\033[38;5;159m\]"
white="\[\033[97m\]"
reset="\[\033[0m\]"

export GIT_PS1_SHOWDIRTYSTATE=1

export PS1="$pink\u $yellow\W$green\$(__git_ps1) 
$cyan$ $cyan"
