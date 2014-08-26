# This module shows how to make a custom command for cluster-service. #

( > and cservice> are prompts. Don't type in. )

0.Prior to install this module, you need to install a cluster-service module first.

	> npm install -g cluster-service

1.How to install this module.

	> npm install mycmd

2.How to set a command.

	> cservice "./your_app.js" --commands "./node_modules/mycmd"

3.How to use a command.

	cservice> myhello

4.The above 'myhello' command will show the below output.

	cservice:
		{ message: 'my hello!' } 

5.How to customize this module.

	Open the ./node_modules/mycmd/myhello.js with your favorite editor.
	Add your functionality to 'exports' or 'cb' function.

6.Have fun!

 
