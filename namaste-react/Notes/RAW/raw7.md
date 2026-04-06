use effect
no dependency array - called everytime
empty dependency array - called once
dependency array with variable - called everytime the variable changes/updates.

use state
always create usestate hooks inside component....not outside
tip (good practice) : create at start to keep the code clean and avoiding inconsistency
do not create a usestate variable inside if else

routing of the react application
react-router-dom library is used for routing. it is a very popular library

whereever routes are to be created we will create routing configuration
for that we will import createBrowserRouter from react-router-dom

routing configuration banana hai using createbrowserrouter....ye ek array of objects lets h..and object me hm path and element dete hai...ki kya path me hame kya element render karna hai.
{path: "/",
element : <AppLayout/>}

ab root.render bhi ham directly nhi karenge

ham routerprovider import kar lenge..
ham karenge root.render(<RouterProvider router={appRouter}>)

shortcut to create a component "rafce" in vs code

default error handel ho jayega but hm apna personalised eroor landing page bna sakte h...

object me hi errorElement : <Error/>

react-router-dom gives us access to a hook useRouteError()
isse hame error ki detailed and info mil jaati h jo hm use kr sakte h error page me dikhane ke lie

const err = useRouteError();
err.status ese kr kr ke sb access kr sakte h ab.

jaise yar hame header and footer intact rakhna hai and beech ka content yani body will be decided by route like about page, contact page, ya restaurant page ese karna hai tab kya hai chidren routes bannane honge toh ek
aur children : [{element : , path : }] ese karke pass hoga ese a property under a route.
and hame Outlet import karna hai and outlet as component render karna hai. toh jo path hai uss hisab se apne app render ho jaygega component.

ab hame routing ke lie links jaise anchor tag href karte the waise banayenge but the problem is isse pura page reload ho jaata hai so ham karegnge kya ki

import link from react-router-dom
<Link to="/contact">Contact us</Link>
behind the scenes the link also uses anchor tag 

client side routing
server side routing

creating dynamic route
how to create dynamic route
/restaurant/:refid

single page application

useParams hook (show how to used)

key should be on the parent jsx that is being mapped (imp please explain with example)


