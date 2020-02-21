#include<stdio.h>
#include<stdlib.h>


void merge(int val[], int wght[], int l,int m, int h){

    int ls = m - l + 1;
    int rs = h - m;

    int Lv[ls], Lw[ls], Rv[rs],Rw[rs], i, j, k=l;

    for (i = 0; i < ls; i++){

        Lv[i] = val[l+i];
        Lw[i] = wght[l+i];

    }
    for (j = 0; j < rs; j++){

        Rv[j] = val[m+1+j];
        Rw[j] = wght[m+1+j];

    }

    i = 0; j = 0;

    while ( i< ls && j < rs){

        if(((float)Lv[i]/(float)Lw[i])>=((float)Rv[j]/(float)Rw[j])){

            val[k] = Lv[i]; wght[k] = Lw[i];
            i++;

        }else{

            val[k] = Rv[j]; wght[k] = Rw[j];
            j++;
            
        }

        k++;

    }

    while(i<ls){

        val[k] = Lv[i]; wght[k] = Lw[i];
        i++; k++;
    }

    while(j<rs){

        val[k] = Rv[j]; wght[k] = Rw[j];
        j++; k++;

    }


    return;


}

void sort(int val[], int wght[], int l, int h){

    if(l>=h) return;

    int mid = (l+h)/2;
    sort(val, wght, l, mid);

    sort(val, wght, mid+1, l);

    merge(val, wght, l, mid, h);

}

void print(int arr[], int n){
    for(int i = 0; i<n; i++){

        printf("%d\t", arr[i]);
    }printf("\n");

}

void knapSack(int val[], int wght[], int n, int w){

    float max = 0;

    for(int i = 0; i < n; ++i){

        if(w-wght[i] > 0){

            max += val[i];
            printf("value : %d weight: %d\n", val[i], wght[i]);
            w -= wght[i];

        }else{
            float x = (float)w/(float)wght[i];
            max += x*val[i];
            printf("value : %d weight: %d\n", val[i], w);
            w  = 0;
            break;

        }

    }
    printf("Maximum profit: %.2f\n",max);

    return;

}

int main(){

    int val[] = {10,5,15,7,6,18,3};
    int wght[] = {2,3,5,7,1,4,1};
    int w = 15;

    int n = sizeof(val)/sizeof(val[0]);

    sort(val, wght, 0, n-1);

    print(val,n);
    print(wght,n);

    knapSack(val, wght, n, w);



    return 0;
}


