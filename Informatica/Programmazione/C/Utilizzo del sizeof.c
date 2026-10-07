int main() {
    //dichiarazioni delle varibili
    int a, e;
    int f;
    float b;
    char c;
    double d;
    f=0;
    e=sizeof(a);
    printf("La dimensione di un intero e' %d", e);
    f=sizeof(b);
    printf("\n\nLa dimensione di un float e' %d", f);
    f=sizeof(c);
    printf("\n\nLa dimensione di un carattere e' %d", f);
    f=sizeof(d);
    printf("\n\nLa dimensione di un double e' %d", f);
    
	return 0

}