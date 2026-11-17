class Node{
    int value;
    Node next;

    Node(int value){
        this.value=value;
        this.next=null;
    }

}

class LinkedList{
    Node head;

    public static void main(String[] args){
        Node first=new Node(10);
        Node second=new Node(20);
        Node third=new Node(30);
        Node fourth=new Node(40);

        first.next=second;
        second.next=third;
        third.next=fourth;

        Node head=first;

        Node temp=head;

        while(temp!=null){
            System.out.print(temp.value+ " ->");
            temp=temp.next;
        }

        System.out.print("null");

    }
}