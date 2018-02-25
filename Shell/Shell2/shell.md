# Learning About Shell

* Command line is and Interface for issuing commands to the operating System.

## Discovering Shell Commands

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

Stands for copy. It is used to copy a file from a specified path to another specified path.

    cp <path1/file_name> <path2/new_filename>

You can also copy multiple files and save it to a directory.

    cp <file> <file> .. <directory>

## 5. mv

Stands for move. It is used to move a file to specified path. mv also forks for directory

    mv <file> <path>

Working method same as cp.
It can also be used to rename files.

    mv old_file new_file

## 5. rm

Remove. removes or deletes files form specified path

    rm <files>    

