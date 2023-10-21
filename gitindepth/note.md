commit is a point to a tree
commit contains metadata such as author and commiter date and message
in a tree there is a blog and point to other tree
tree is directory and blob are file

tree is a snapshot of the repo

we cant change commit because it will get new SHA1 because created date will change

references are pointer to commit - tags - branches - HEAD (point to current commit)

working area is local eke untracked file

staging -> what file going to be part of the next commit
baseline of staging is an exact copy of the latest commit

repo -> contains all commit

git rm and git mv exist
git add -p allow to stage commit if too muck work done and question mark for help work for stash too

unstage doesnt remove the file just replacing them wit h a copy of the current in the repo

git stash -> save uncommitted work | parameter : --include-untracked -> to stash file untrack | --all exist too
git stash list
git stash apply -> can apply a specific stash
git stash pop
drop -> to remove last stash

you can name stash with "save"

start a new branch with stash

grab a single file with stash

branch is just a commit to a particular commit

the pointer of the current branch changes as new commit are made

HEAD is just a pointer to the name of the current branch
or a commit (detached head)

git tag -a exist to name a tag

a branch will change because his pointer move if you do more commits

merge commits are just parent

git merge --no-ff will force to merge and dont do fast forward
fast forward means no change on master so just put it as legit commit on master

merge conflict
git rerere save how you resolve conflict and do it on next conflict

commit message description exist

^ means the first parent commit if added a number the n number of parent commit
~ means the first commit back and added a number the n number of parent commit

git diff A B
show only B changes

what happens when git checkout a branch

- change HEAD to point to the new branch
- copy the commit snapshot to the staging area

git checkout -- file

- replace working area copy with current staging area

git checkout -- <file_path>
overwrite working are file with the staging are version

git checkout <commit> -- file

update the staging area to match the commit
update the working are to match the staging area

git clean delete untracked files
need -d --dry-run to show which text will be delete
need -f to do it

git reset -- mixed
move the HEAD pointer like git checkout and also modify files
if file path dont modify the HEAD pointer, modifies files
by default just copy file to staging area
if --hard copy to working area also

git reset -- file
just change file in staging area
git reset <COMMIT> -- <file>
just change file in staging area


UNDO GIT RESET -> git reset ORIG_HEAD

git revert -> create new commit which do the oppposite of the specified commit
it doesnt change history

git rebase and amend rewrite history
amend is use to make change to previous commit do it only on local environment if work alone

rebase => give a commit a new parent 
use if master more commited then when you do your commit

interactive rebase
git rebase -i <commit_to_fix>^

rebase can split commit

git commit --fixup <SHA>

git rebase --abort to abort rebase if not doing good

# COMMIT OFTEN, PERFECT LATER, PUBLISH ONCE

rebase -i work in invert then git log

git pull = fetch and merge together

git pull --rebase
do a pull but review each commit with rebase

tags need to be push with --tags

ORIG_HEAD point to where we are before a reset or a merge

undo a merge -> git reset --merge ORIG_HEAD

travis ci to continuous integration
