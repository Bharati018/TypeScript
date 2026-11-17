public class designLL {

    class Node{
        int val;
        Node next;

        Node(int val){
            this.val=val;
            this.next=null;
        }
    }

    Node head;
    int size=0;

    designLL(){
        head=null;
        size=0;
    }
    //get value at given index

    public int get(int idx){
        if(idx<0 || idx>=size){
            return -1;
        }

        Node temp=head;
        for(int i=0;i<idx;i++){
            temp=temp.next;
        }
        return temp.val;
    }

    //insert at beginning
    public  void addAtHead(int val){
        Node newNode = new Node(val);
        newNode.next=head;
        head=newNode;
        size++;
    }

    //insert at end
    public void addAtTail(int val){
        Node newNode=new Node(val);

        if(head==null){
            head=newNode;
            size++;
            return;
        }
        Node temp=head;

        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=newNode;
        size++;
    }

    //insert at specific index
    public void addAtIndex(int index,int val){
        if(index<0|| index>size){
            return;
        }
        if(index==0){
            addAtHead(val);
            return ;
        }
        Node newNode=new Node(val);
        Node temp=head;

        for(int i=0;i<index-1;i++){
            temp=temp.next;
        }
        newNode.next=temp.next;
        temp.next=newNode;
        size++;
    }

    //delete at specific given index

    public void deleteAtIndex(int index){
        if(index<0||index>=size){
            return;
        }
        if(index==0){
            head=head.next;
            size--;
            return;
        }
        Node temp=head;
        for(int i=0;i<index-1;i++){
            temp=temp.next;
        }
        temp.next=temp.next.next;
        size--;
    }
    public void display(){
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.val+"->");
            temp=temp.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
       designLL dl=new designLL();
       dl.addAtTail(10);
       dl.addAtTail(20);
       dl.addAtTail(30);
       dl.addAtTail(40);
       dl.display();
       System.out.println("before deletion:");
       dl.deleteAtIndex(3);
       System.out.println("after deletion:");
       dl.display();

       

    }

}
