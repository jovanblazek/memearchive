#include <stdio.h>
#include <dirent.h>

#define PRIECINOK "momentky"

int main(void)
{
	struct dirent *de;
	
	FILE *f = fopen("momentky.txt","w");

	// opendir() returns a pointer of DIR type. 
	DIR *dr = opendir("../"PRIECINOK);

	if (dr == NULL) // opendir returns NULL if couldn't open directory
	{
		printf("Could not open current directory" );
		return 0;
	}

	while ((de = readdir(dr)) != NULL)
	{
		printf("<div class=\"box\"><img class=\"lazy\" data-src=\"images/memes/%s/%s\" alt=\"%s\"></div>\n", PRIECINOK, de->d_name, de->d_name);
		fprintf(f,"<div class=\"box\"><img class=\"lazy\" data-src=\"images/memes/%s/%s\" alt=\"%s\"></div>\n", PRIECINOK, de->d_name, de->d_name);
		/*
	   	printf("images/memes/%s/%s ", PRIECINOK, de->d_name);
	    printf("alt=");
		printf("%s", de->d_name);
		printf(">\n");*/
	}
	closedir(dr); 
	
	fclose(f);
	
	return 0;
}

