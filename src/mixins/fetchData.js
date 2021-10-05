export default function (DefaultDataValue=null){
    return {
        data(){
            return {
                isLoading:true,
                data:DefaultDataValue,
            }
        },
        async created(){
            this.data=await this.fetchData();
            this.isLoading=false;
        }
    }

}