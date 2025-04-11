<template>
<body :class="{'bg-light style-default style-rounded': $route.path == '/', ' home style-politics': $route.path == '/politics'}">
    <RouterView/>
    
</body>


</template>

<script>
import { RouterView, useRoute} from 'vue-router';
const route = useRoute();



</script>