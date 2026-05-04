class Stack {
    private int[] mem;
    private int p;
    private int n;

    public Stack(int size) {
        mem = new int[size];
        p = -1;
        n = 0;
    }

    private boolean isFull() throws StackFullException {
        if (n == mem.length) {
            throw new StackFullException("Pila piena");
        }
        return false;
    }

    private boolean isEmpty() throws StackEmptyException {
        if (n == 0) {
            throw new StackEmptyException("Pila vuota");
        }
        return false;
    }

    public void push(int x) throws StackFullException {
        isFull();
        p++;
        mem[p] = x;
        n++;
    }

    public int pop() throws StackEmptyException {
        isEmpty();
        int val = mem[p];
        p--;
        n--;
        return val;
    }
}