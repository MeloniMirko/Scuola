#include <stdio.h>

int main()
{
    int*pi;
    int num = 255L;
    pi = &num;

    printf("num = %d\n", num);
    printf("num = %x\n", &num);
    printf("num = %d\n", *&num);
    printf("pi = %d\n", *pi);
    printf("pi = %x\n", pi);
}