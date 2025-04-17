#include<stdio.h>
#include<string.h>

int main(){
    // FILE *file = fopen("D:\\tugas\\2_2\\OpenSource\\html_project\\test3.html","r");
    FILE *file = fopen("D:\\tugas\\2_2\\OpenSource\\html_project\\testfile.txt","r");
    FILE *dest = fopen("D:\\tugas\\2_2\\OpenSource\\html_project\\testOutput.txt","w");

    char buff[3000];

    char name[3000];
    char location[3000];
    char year[3000];
    char description[3000];
    char funfact[3000];

    int nameHead = strlen("::");
    int locationHead = strlen("Location:");
    int yearHead = strlen("Year Inscribed:");
    int descriptionHead = strlen("Description:");
    int funfactHead = strlen("Fun Fact:");

  /*   
:: Statue of Liberty
Location: New York, United States
Year Inscribed: 1984
Description:
A gift from France to the United States in 1886, the Statue of Liberty is a universal symbol of freedom and democracy. It stands at the entrance of New York Harbor, welcoming immigrants and visitors alike.
Fun Fact:
The full name of the statue is "Liberty Enlightening the World.
 */
    int targetIdx;
    while(!feof(file)){

        //for name
        targetIdx = 0;
        fgets(buff,1024,file);
        if(strstr(buff,"::")!=NULL){
            sprintf(name+targetIdx,"%s",buff+nameHead); targetIdx+=strlen(buff+nameHead); 
            name[targetIdx-1]=' ';
            while(1){
                fgets(buff,1024,file);
                if(strstr(buff,"Location:")!=NULL) break;
                sprintf(name+targetIdx,"%s",buff); targetIdx+=strlen(buff);
                name[targetIdx-1]=' ';
            }         
        }

        //for location
        targetIdx = 0;
        if(strstr(buff,"Location:")!=NULL){
            sprintf(location+targetIdx,"%s",buff+locationHead); targetIdx+=strlen(buff+locationHead); 
            location[targetIdx-1]=' ';
            while(1){
                fgets(buff,1024,file);
                if(strstr(buff,"Year Inscribed:")!=NULL) break;
                sprintf(location+targetIdx,"%s",buff); targetIdx+=strlen(buff);
                location[targetIdx-1]=' ';
            }         
        }
        
        //for year
        targetIdx = 0;
        if(strstr(buff,"Year Inscribed:")!=NULL){
            sprintf(year+targetIdx,"%s",buff+yearHead); targetIdx+=strlen(buff+yearHead); 
            year[targetIdx-1]=' ';
            while(1){
                fgets(buff,1024,file);
                if(strstr(buff,"Description:")!=NULL) break;
                sprintf(year+targetIdx,"%s",buff); targetIdx+=strlen(buff);
                year[targetIdx-1]=' ';
            }         
        }

        
        //for Description
        targetIdx = 0;
        if(strstr(buff,"Description:")!=NULL){
            sprintf(description+targetIdx,"%s",buff+descriptionHead); targetIdx+=strlen(buff+descriptionHead); 
            description[targetIdx-1]=' ';
            while(1){
                fgets(buff,1024,file);
                if(strstr(buff,"Fun Fact:")!=NULL) break;
                sprintf(description+targetIdx,"%s",buff); targetIdx+=strlen(buff);
                description[targetIdx-1]=' ';
            }         
        }

    
        //for Funfact
        targetIdx = 0;
        if(strstr(buff,"Fun Fact:")!=NULL){
            sprintf(funfact+targetIdx,"%s",buff+funfactHead); targetIdx+=strlen(buff+funfactHead); 
            funfact[targetIdx-1]=' ';
            while(1){
                fgets(buff,1024,file);
                if(strcmp(buff,"\n")==0) break;
                sprintf(funfact+targetIdx,"%s",buff); targetIdx+=strlen(buff);
                funfact[targetIdx-1]=' ';
                if(feof(file))break;
            }         
        }
            
        fprintf(dest,
        "<div class=\"entry\">\n"
        "    <div class=\"title\">%s</div>\n"
        "    <div class=\"flex\">\n"
        "        <div class=\"profile\">\n"
        "            <img src=\"..\\asset\\machu picchu.png\">\n"
        "            <div class=\"location\" >%s</div>\n"
        "        </div>\n"
        "        <div class=\"descpription\" >%s</div>\n"
        "    </div>\n"
        "    <div class=\"funfact\"> %s </div>\n"
        "</div>\n"
        , name, location, description, funfact);
        
    }
        
       



    fclose(file);
    fclose(dest);
    return 0;
}

/* 
printf(
"<div class=\"entry\">\n"
"    <div style=\"background-color: chartreuse;\">Statue of Liberty</div>\n"
"    <div class=\"flex\">\n"
"        <div class=\"descpription\" style=\"background-color: honeydew;\">Nestled high in the Andes Mountains, Machu Picchu is a 15th-century Inca citadel that remained hidden from the outside world for centuries. It showcases the Inca civilization’s architectural mastery and deep connection with nature.</div>\n"
"        <div class=\"profile\">\n"
"            <div class=\"img\" >img</div>\n"
"            <div class=\"location\" style=\"background-color: khaki;\">Cusco Region, Peru</div>\n"
"        </div>\n"
"    </div>\n"
"    <div style=\"background-color:brown\"> Machu Picchu was never discovered by Spanish conquistadors, which helped preserve it from ""destruction."
"    </div>\n"
"</div>\n"
        );
         */

/* 
<div class="entry">
    <div style="background-color: chartreuse;">Statue of Liberty</div>

    <div class="flex">
        <div class="descpription" style="background-color: honeydew;">Nestled high in the Andes Mountains, Machu Picchu is a 15th-century Inca citadel that remained hidden from the outside world for centuries. It showcases the Inca civilization’s architectural mastery and deep connection with nature.</div>
        <div class="profile">
            <div class="img" >img</div>
            <div class="location" style="background-color: khaki;">Cusco Region, Peru</div>
        </div>
    </div>

    <div style="background-color:brown"> Machu Picchu was never discovered by Spanish conquistadors, which helped preserve it from destruction.
    </div>
</div>
*/