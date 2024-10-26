MVP: Anyone can look up what cohorts share any users with x-cohort(s), initially by number of users shared.

Main pages:
1. front.ejs
2. account.ejs *the only page requiring user-login to use.
3. dashboard.ejs
4. cohort.ejs
     =>
a. FRONT displays nothing, except Nav with form-popup-partials for registering and login
b. ACCOUNT displays user's own cohorts, and another SECTION for cohort's that have the same users as user's cohorts.
c. DASHBOARD - shows nav, searchbar with dropdown, section for showing a collection of the cohort's being sought,
   ...and a main result's section for arranging cohorts that share users with DEFAULT (by default) or SEARCHED cohorts.
d. COHORT - for displaying details of one cohort, initially the cohort's that share user's with it.

Partials:
1. header.ejs
2. footer.ejs
3. register.ejs - register form-popup on front page (or perhaps anywhere)
4. login.ejs
5. nav.ejs - searchbar w/ dropdown, on every page, although
6. make.ejs - a pop-up form for making cohort.
