export default function (times ,showTime=false){
    const date=new Date(+times);
    const year=date.getFullYear();
    const month=(date.getMonth()+1).toString().padStart(2,'0');
    const day=date.getDate().toString().padStart(2,'0');
   let res= `${year}-${month}-${day}`;
   const hour=date.getHours();
   const minute=date.getMinutes();
   const second=date.getSeconds();
    if(showTime){
        res+=` ${hour}:${minute}:${second}`;
    }
    return res;
}
