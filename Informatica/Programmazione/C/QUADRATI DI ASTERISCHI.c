#include <stdio.h>

int main() {
    printf("We! Questo programma ha la funzione di disegnare dei quadrati uno dentro l'altro\n");

    for (int i = 0; i < 12; i++) {
        for (int j = 0; j < 12; j++) {
            if (i == 0 || i == 11 || j == 0 || j == 11) {
                printf("* ");
            } else if (i == 2 || i == 9 || j == 2 || j == 9) {
                if (i >= 2 && i <= 9 && j >= 2 && j <= 9) {
                    printf("* ");
                } else {
                    printf("  ");
                }
            } else if (i == 4 || i == 7 || j == 4 || j == 7) {
                if (i >= 4 && i <= 7 && j >= 4 && j <= 7) {
                    printf("* ");
                } else {
                    printf("  ");
                }
            } else {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

