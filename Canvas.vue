<template>
        <svg class="follower" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 245 200">
            <defs>    
                <clipPath id="clip-path" transform="translate(-76.9 -60)">
                    <ellipse class="cls-1" cx="199.4" cy="154.5" rx="61" ry="86.5"></ellipse>
                </clipPath>
            </defs>
            <g id="body">
                <path class="cls-2" d="M51.63,94.5H193.37a51.13,51.13,0,0,1,51.13,51.13V215.5a0,0,0,0,1,0,0H.5a0,0,0,0,1,0,0V145.63A51.13,51.13,0,0,1,51.63,94.5Z"></path>
                </g>
            <g id="head" :transform="'translate(' + move(3,3)+')'">
                <ellipse class="cls-3" cx="122.5" cy="94.5" rx="61" ry="86.5"/>
                <g class="cls-4">
                    <rect class="cls-5" x="51.6" y="0" width="131" :height="5 * this.y  + 72.5"/></rect>
                </g>
                <ellipse class="cls-6" cx="122.5" cy="94.5" rx="61" ry="86.5"></ellipse>
            </g>
            <g id="mouth" :transform="'translate('+ move(20,20) +')'">
                <rect class="cls-1 pp" x="103" y="129" width="39" height="8" rx="4"></rect>
            </g>
                
            <g id="bear" :transform="'translate('+ move(22,21) +')'">
                <rect class="most" x="103" y="120" width="15" height="6" > </rect>
                <rect class="most" x="128" y="120" width="15" height="6" > </rect>
                <path class="cls-7" d="M214.9,215c-11,0-9-19-15.5-19s-4.5,19-15.5,19a4,4,0,0,0-4,4c0,5.5,9.75,8.75,19.5,9,9.75-.25,19.5-3.5,19.5-9A4,4,0,0,0,214.9,215Z" transform="translate(-76.9 -60)"></path>
            </g>
            <g id="cap" :transform="'translate('+ move(12,7) +')'">
                <path class="cls-1" d="M103.6,54.5h41a9,9,0,0,1,9,9v0a9,9,0,0,1-9,9h-41a0,0,0,0,1,0,0v-18A0,0,0,0,1,103.6,54.5Z"/>
                <path class="cls-1" d="M123.6,32.5h0a20,20,0,0,1,20,20v2a0,0,0,0,1,0,0h-40a0,0,0,0,1,0,0v-2A20,20,0,0,1,123.6,32.5Z"/>
                <polygon class="cls-6" points="113.25 61 109.78 61 108.05 64 109.78 67 113.25 67 114.98 64 113.25 61"/>
                <circle class="cls-6" cx="111.52" cy="64" r="1.5"></circle>
                <polygon class="cls-6" points="122.69 61 119.23 61 117.5 64 119.23 67 122.69 67 124.43 64 122.69 61"/>
                <circle class="cls-6" cx="120.96" cy="64" r="1.5"></circle>
                <polygon class="cls-6" points="132.14 61 128.68 61 126.94 64 128.68 67 132.14 67 133.87 64 132.14 61"/>
                <circle class="cls-6" cx="130.41" cy="64" r="1.5"></circle>
                <polygon class="cls-6" points="141.58 61 138.12 61 136.39 64 138.12 67 141.58 67 143.32 64 141.58 61"/>
                <circle class="cls-6" cx="139.85" cy="64" r="1.5"></circle>
            </g>
            <g id="Glasses" :transform="'translate('+ move(27,27) +')'">
                <path class="cls-8" d="M253.27,138.5H145.53a6.12,6.12,0,0,0-6.13,6.13v17.11a24.75,24.75,0,0,0,24.76,24.76h0c13.39,0,24.24-9,24.24-28.21,0-8.79,4-14.79,11-14.79s11,6,11,14.79c0,19.21,10.85,28.21,24.24,28.21h0a24.75,24.75,0,0,0,24.76-24.76V144.63A6.12,6.12,0,0,0,253.27,138.5ZM183.4,163.83a18.67,18.67,0,0,1-18.67,18.67h-1.67a18.65,18.65,0,0,1-18.66-18.66V149.63a6.12,6.12,0,0,1,6.13-6.13h27a5.83,5.83,0,0,1,5.83,5.83Zm71,0a18.65,18.65,0,0,1-18.66,18.66h-1.67a18.67,18.67,0,0,1-18.67-18.67v-14.5a5.83,5.83,0,0,1,5.83-5.83h27a6.12,6.12,0,0,1,6.13,6.13Z" transform="translate(-76.9 -60)"></path>
            </g>
        </svg>
</template>

<script>
    export default{
        props:['x','y','clickX','clickY'],
        methods:{
            move(x,y){ 
                return `${this.x * x} ${this.y * y}`
            }            
        }
    }
</script>

<style scoped>
svg {
    width:30vw;    
}
.cls-1,.cls-3{
    fill:#fff;
}
.cls-1,

.cls-2,
.cls-5,
.cls-6
{
    stroke:#000;
    stroke-miterlimit:10;
}
.cls-2{
    fill:var(--yellow2);
}
.cls-4{
    clip-path:url(#clip-path);
}
.cls-5,
.cls-7,.most,.cls8{fill:#272727;
}
.cls-6{fill:none;}
                
</style>