# Learning About Shell

Command line is an Interface for issuing commands to the operating System.

## **Manipulating file and directories**

## 1. pwd

This command stands for print working direcory. Returns the absolute path of current working directory.

```bash
pwd
home/pwl
```

## 2. ls

Short for "listing". Lists the contents of current working directory.

```bash
 ls
```

The following displays the files in the provided directory.

    ls <directory>

**Note :** If a file path starts with `/` it is absolute else it is relative.

## 3. cd

Stands for Change Directory. Move around.

    cd PATH

## 4. cp

Stands for copy. It is used to copy a file from a specified path to another specified path. Can also copy directories

    cp <path1/file_name> <path2/new_filename>

You can also copy multiple files and save it to a directory.

    cp <file> <file> .. <directory>

## 5. mv

Stands for move. It is used to move a file to specified path. **mv also forks for directory**

    mv <file> <path>

Working method same as cp.
It can also be used to rename files directories

    mv old_file new_file

## 6. rm

Remove. removes or deletes files form specified path

    rm <files>

## 7. mkdir & rmdir

Makes and deletes directory respectively. Other commands are same for both files and directories except for these two.

```bash
rmdir directory_name
mkdir directory_name
```

**Note :** /tmp is used to store temporary files. (Linux)

## **Manipulating Data**

## 1. cat

Concatenate. Prints the content of file on screen.

    cat <files>

## 2. less

View less of the data.

    less <files>

**Note :** `:q` is used to quit `:spacebar` is used to scroll and `:n` is used to see next page.

## 3.head

Displays upto first 10 lines of the file.

    head <filename>

**Note :** `tab` can be used for completion.

## 4. flags

flags determine what extra actions to perform

    -n -F -R

* `-n` number
* `-R` Recursive
* `-F` Classify
* `-f` fields (columns)
* `-d` delimeters(seperators)

## 5. cut

Select columns from a file.

    cut -f 2-5,8 -d , values.csv

here `f` tells the number of fields to select and `-d` tells the seperator for the fields i.e `,` .`-d` must come before `-f`.

## 6. history

Lists out the past executed commands.

    history

`!` is used to call the command from history

## 7. grep

Takes a piece of text and searches it in the given file.

    grep <searchString> <filenames>

flags used in grep:

* `-c`: print a count of matching lines rather than the lines themselves
* `-h`: do not print the names of files when searching multiple files
* `-i`: ignore case (e.g., treat "Regression" and "regression" as matches)
* `-l`: print the names of files that contain matches, not the matches
* `-n`: print line numbers for matching lines
* `-v`: invert the match, i.e., only show lines that don't match

## **Combining Tools**

## 1. Storing output (Redirection)

`>` is used to direct an output to a destination.

    head source.txt > output.txt

## 2. pipe

The pipe symbol tells the shell to use the output of the command on the left as the input to the command on the right.

    head -n 5 seasonal/summer.csv | tail -n 3

You can chain multiple commands :

    cut -d , -f 1 seasonal/spring.csv | grep -v Date | head -n 10

## 3. Word Count

The command wc (short for "word count") prints the number of characters, words, and lines in a file. You can make it print only one of these using `-c`, `-w`, or `-l` respectively.

    $ wc -w Shell\shell.md
    593 Shell\shell.md

## 4. Wild Cards

Most shell commands will work on multiple files if you give them multiple filenames. For example, you can get the first column from all of the seasonal data files at once like this:

    cut -d , -f 1 seasonal/winter.csv seasonal/spring.csv seasonal/summer.csv seasonal/autumn.csv

But typing the names of many files over and over is a bad idea: it wastes time, and sooner or later you will either leave a file out or repeat a file's name. To make your life better, the shell allows you to use wildcards to specify a list of files with a single expression. The most common wildcard is `\*`, which means "match zero or more characters". Using it, we can shorten the cut command above to this:

    cut -d , -f 1 seasonal/*

The wild cards regular expressions.
The shell has other wildcards as well, though they are less commonly used:

* `?` matches a single character, so `201?.txt` will match `2017.txt` or `2018.txt`, but not `2017-01.txt`.
* `[...]` matches any one of the characters inside the square brackets, so `201[78].txt` matches `2017.txt` or `2018.txt`, but not `2016.txt`.
* `{...}` matches any of the command-separated patterns inside the curly brackets, so `{_.txt, _.csv}` matches any file whose name ends with `.txt` or `.csv`, but not files whose names end with `.pdf`.

## 5. sort

As its name suggests, sort puts data in order. By default it does this in ascending alphabetical order, but the flags `-n` and `-r` can be used to sort numerically and reverse the order of its output, while `-b` tells it to ignore leading blanks and `-f` tells it to fold case (i.e., be case-insensitive). Pipelines often use grep to get rid of unwanted records and then sort to put the remaining records in order.

    sort <flag> <filename>

## 6. uniq

Another command that is often used with sort is uniq, whose job is to remove duplicated lines. More specifically, it removes adjacent duplicated lines.

    uniq <flag> <filename>

`-c` is used to count the repeated lines.

## 7. Pipeline and Redirection

The shell lets us redirect the output of a sequence of piped commands:

    cut -d , -f 2 seasonal/*.csv | grep -v Tooth > teeth-only.txt

However, `>` must appear at the end of the pipeline: if we try to use it in the middle, like this:

    cut -d , -f 2 seasonal/*.csv > teeth-only.txt | grep -v Tooth

then since all of the output from cut is written to `teeth-only.txt`, there is nothing left for grep, so it waits forever for some input.

**NOTE : <kbd>Ctrl + C<kbd> is used to stop an executing program.**

## **Batch Processing**

Like other programs, the shell stores information in variables. Some of these, called environment variables, are available all the time. Environment variables' names are conventionally written in upper case.
To get a complete list (which is quite long), we can type `set` in the shell.

## 1. Print Value

`echo` is used to print a value and any value with starting dollar prints variable value.

    $ echo OSTYPE
    OSTYPE
    $ echo $OSTYPE
    linux-gnu

## 2. Local Variables (Shell Variable)

To create a shell variable, you simply assign a value to a name:
training=seasonal/summer.csv