# data.js generator for Datavisualization with infovis

This script aims to generate a **data.js** file that is the javascript data file needed for render an interactive relation graph between objects, based on the **infovis** javascript library.

This script aims generate **data.js** from a csv file.

The **data.js** is to be used as the data rendering file in the RGRPAH  Infovis project located here :

[2D_visualization_with_infovis project]('https://github.com/pcardotatgit/2D_visualization_with_infovis)

## Let's setup a goal

What can we graph ? That is the question...

Our goal is to generate a 2D 360° interactive relation graph tree for the **data.csv** the **datas** subfolder.

Have a look to this file. 

This on contains network information.  This is a network inventory. It is about of Endpoints connected to switchs within a network.

```
My_Network;Office Switch;LAB_SWITCH-1;00:fc:8b:83:69:98;192.168.128.26;Android;00:fc:8b:83:69:98
My_Network;Basement;LAB_SWITCH-2;dc:f3:03:e0:c4:b9;192.168.128.210;Windows 10;dc:f3:03:e0:c4:b9
My_Network;2nd Floor;LAB_SWITCH-3;ac:13:f4:70:3f:37;192.168.128.223;Apple iPad;ac:13:f4:70:3f:37
My_Network;Basement;LAB_SWITCH-2;00:fc:8b:2a:83:dd;192.168.128.190;Android;00:fc:8b:2a:83:dd
My_Network;Office Switch;LAB_SWITCH-4;00:17:88:4b:9c:42;192.168.128.31;Linux;00:17:88:4b:9c:42
```

We are going to display this file as the following graph

![](./img/graph.gif)


## The /datas/data.csv file format

Even if it is not obvious, this file csv describes a tree.

The first column ( column_level0 )contains a single information that is a network name. All cells contain the same value.

The second column ( column_level1 ) contains **site names** that belong to this network. 

The third column ( column_level2 ) contains a **switch names** of switches that belong to every **sites**.  Every sites contains several switches and this is the reasons why we have in the second column, several times in several rows the same site names. But for every of these row we mention in the third column a switch name.

The fourth column ( column_level3 ) contains **Mac addresses** of endpoint that are connected to switches.

The fifth column contains ( column_level4 ) the **ip addresses** that are attached to the mac addresses

The column number ( column_level5 ) six contains the endpoint  operating system **OS**

So this files describes a tree and every branches of this tree can be described as the following path :

Network Name => Site => Switch => Mac Address => Ip Address => OS

You can understand now that if you want to add an additionnal row to the file. you just have to add a new line at the end of the file. A line that respect this above format with all item names. You don't have to take care of the order of the lines.

# Some Rules for creating the data.csv file

The **data.csv** file must be located into the **datas** folder.

The first column ( column_level0 ) must contains the trunk name of the tree in every lines ( ex : My_Network )

The second column ( column_level1 ) have to contain the names of the first level of branches attached to the trunk.

And then the third column ( column_level2 ) have to content, for every prior branches, every second level sub branches names.

Etc...Etc...

The script is currently able to manage 5 sub levels of branches ( depth )

Conclusion, if you write a CSV file that respect this format, whatever the data you put into it? then you will generate an interactive RGRAPH.

# Customize csv file parsing

The script allows you to customize the depth ( number of sublevels ) and the column order.

Edit the **1-graph-it.py** file a at the top of the file you can modify the value of the following global variables.



# installation

Create a working directory and open a CMD console / terminal into it.


## dependencies

You just have to install the **crayons** python module

```
    pip install crayons
```

## Run the script and get the result

1-  you must have a valid **data.csv** file into the **/datas** subfolder
2- from your working directory type :

```
    python 1-graph-it.py
```

The result will be to files located into the **/output** directory

- **data.js** : the expected result
- **z_var_json.json** : for debugging

The **/output** directory contains a html files named **graph.html** and all infovis resources located into the **/output/resources** subfolder.

After having running the script, you can check the result by opening the **graph.html** file with your browser.

The **graph.html** is an example of web page to display.

You can modify it as you wich and if you need to change background color or size, then edit the **/output/resources/css/base.css** file