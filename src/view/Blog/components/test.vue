<template>
  <div class="test-container">
        <h3>目录</h3>
      <RightList :list='list'/>
  </div>
</template>

<script>
import RightList from './RightList';
export default {
    components:{
        RightList,
    },
    data(){
        return {
            list:[
                {name:'a',selected:true,
                child:[
                    {name:'a-1',selected:false},
                    {name:'a-2',selected:false}]
                },
                {name:'b',selected:false,
                child:[{name:'b-1',selected:false},
                {name:'b-2',selected:false},
                {name:'b-3',selected:false}]
                },
                {
                name:'c',
                selected:false,
                child:[
                    {
                    name:'c-1',
                    selected:false,
                    child:[{
                        name:'c-1-1',
                        selected:false, 
                    }]
                    },
                    {
                    name:'c-2',
                    selected:false,
                    },
                    {
                    name:'c-3',
                    selected:false,
                    },
                ]
                },
                ]
        }
    }
}
</script>

<style>

</style>