#include <stdio.h>
int main () {
    char c1;
    char c2;

    printf("Questo programma serve per acquisire i caratteri con diverse funzioni");

    printf("Scrivi una lettera, questa verra acquisita con scanf: ");
    scanf("%c", &c1);
    printf("Scrivi una altra lettera , questa verra acquisita con getchar: ");
    c2 = getchar();

    printf("Adesso stampiamo i caratteri che hai acauisito : c1=%c\n ",c1  );
    printf("Adesso stampiamo i caratteri che hai acauisito : c2=%",c2);
        return 0;
}