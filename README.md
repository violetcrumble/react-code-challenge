## The Project

https://violetcrumble.github.io/react-code-challenge/


## My Remarks

I found this challenge fun/interesting. I don't have tons of spare time, so I can't take every coding challenge that comes my way. I am glad I took this one. Some of my remarks:

- It resembled a problem one would encounter in real life and gave me an idea of what Landdox work might be like.
- The trickiest part was removing/adding NPRIs since they're nested state elements, and React doesn't see the state change when something is nested. I did some trickery to get the re-render to happen and reflect those changes in the browser. If I did this test again, I'd consider using immutability-helper.
- I didn't get to editing (just adding/removing), and had to make a couple changes to two of the test cases. I tried to comment whenever I changed a test case, to explain why.
- This took me about twice as long as specified (I was fine with that, and I know I could have turned it in less complete, but I didn't want to. I also worked in small chunks when I had time, instead of doing it all at once)
- I thought about using context or redux, but since I was only passing props through 1-2 components, I was OK with not using any global state management this time.


## Deployment

I had never deployed anything to GitHub pages and really enjoyed that part of the challenge. That's something I'll use again in my personal projects. It was easy, but at first, I made it harder than it was. 

I didn't realize the first deployment would take about ten minutes to show up on the Github URL. Since I thought it wasn't working, I fiddled around with the deploy command and accidentally overwrote master with the deployed/minified project that should be in the gh-pages branch (doh!) That was about 30 minutes of my life i won't get back.

That made me really happy I followed your (very pleasant in tone and thorough) instructions and set up the deployment first, since I didn't lose any work. Once I found out the deployment was working the first time, I deleted the doomed repo and started over. That time, it was the easy 5-minute endeavor it should have been.
