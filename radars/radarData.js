//This is the title for your window tab, and your Radar
document.title = "TMai's Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you think it should be using now; proven and mature for use.  If you don't then others might make fun at you at the pub.
// - Trial: blips are considered worth pursuing.  There is a criteria for this quadrant: you must have used this technology on real project work.
// - Assess: technologies are worth exploring with the goal of understanding how it will affect you.
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1160;
var w = 1300;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            {"name":"Build your own radar", "pc":{"r":250,"t":140},"movement":"c"}
            {"name":"HTML 5 storage instead of cookies", "pc":{"r":280,"t":160},"movement":"c"},
            {"name":"DevOps", "pc":{"r":250,"t":110},"movement":"c"},    
            {"name":"Polygot Programming", "pc":{"r":80,"t":140},"movement":"c"},
            {"name":"Healthcheck page", "pc":{"r":80,"t":140},"movement":"c"}
        ]
    },
    { "quadrant": "Tools",
        "left": w-250+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Mercurial", "pc":{"r":380,"t":20},"movement":"c"},
            {"name":"Apache camel", "pc":{"r":280,"t":85},"movement":"c"},
            {"name":"D3", "pc":{"r":210,"t":25},"movement":"c"},
            {"name":"Gradle", "pc":{"r":270,"t":5},"movement":"c"},
            {"name":"mongoDB", "pc":{"r":260,"t":55},"movement":"c"},
            {"name":"Cassandra", "pc":{"r":290,"t":15},"movement":"c"},
            {"name":"Light Table", "pc":{"r":250,"t":40},"movement":"c", "blipSize":300},
            {"name":"NoSQL", "pc":{"r":180,"t":65},"movement":"c"},
            {"name":"Puppet", "pc":{"r":230,"t":85},"movement":"c"},
            {"name":"Git", "pc":{"r":30,"t":15},"movement":"c"},
            {"name":"Github", "pc":{"r":80,"t":70},"movement":"c"},
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Neo4j", "pc":{"r":360,"t":220},"movement":"c"},
            {"name":"Hadoop", "pc":{"r":340,"t":215},"movement":"c"},
            {"name":"Elastic Search", "pc":{"r":240,"t":225},"movement":"c"},
            {"name":"Google App Engine", "pc":{"r":220,"t":205},"movement":"c"},
            {"name":"Node.js", "pc":{"r":235,"t":190},"movement":"c", "blipSize":300},
            {"name":"Storm", "pc":{"r":220,"t":245},"movement":"c", "blipSize":300},
            {"name":"Location based services", "pc":{"r":130,"c":230},"movement":"c"},
            {"name":"Android", "pc":{"r":290,"t":190},"movement":"c"}
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-240+30),
        "top" :   (h/2 + 18),
        "items" : [
            {"name":"Sinatra", "pc":{"r":360,"t":355},"movement":"c"},
            {"name":"F#", "pc":{"r":370,"t":330},"movement":"c"},
            {"name":"Scala", "pc":{"r":370,"t":320},"movement":"c"},
            {"name":"Python", "pc":{"r":260,"t":275},"movement":"c"},
            {"name":"LESS", "pc":{"r":220,"t":340},"movement":"c"},
            {"name":"Dropwizard", "pc":{"r":290,"t":290},"movement":"c"},
            {"name":"Django", "pc":{"r":220,"t":295},"movement":"c"},
            {"name":"HTML 5", "pc":{"r":250,"t":335},"movement":"c", "blipSize":200},
            {"name":"Groovy", "pc":{"r":290,"t":280},"movement":"c"},
            {"name":"CoffeeScript", "pc":{"r":230,"t":310},"movement":"c"},
            {"name":"Ruby", "pc":{"r":130,"t":282},"movement":"c"},
            {"name":"JRuby", "pc":{"r":170,"t":320},"movement":"c", "blipSize":200},
            {"name":"C#", "pc":{"r":90,"t":355},"movement":"c"},
            {"name":"DSLs", "pc":{"r":70,"t":300},"movement":"c", "blipSize":200},
            {"name":"Clojure", "pc":{"r":30,"t":310},"movement":"c", "blipSize":200},
        ]
    }
];
