#include<stdio.h>
int main(){
    double e,x=1.0,pi;
    int n=1,i=1;
    scanf("%lf",&e);
    while((x>0?x:-x)>=e){
      i=(-1)*i;
      n=n+2;
      x=x+1.0/(i*n);  
    }
   printf("%lf",4.0*x);
   return 0; 
}




