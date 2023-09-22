<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1 class="text-[#70926D] text-4xl font-bold">JÄÄTMELIIGID</h1>
    <ul class="list-disc p-6 text-[#70926D] text-xl">
        <li><router-link to="/segaolme">SEGAOLMEJÄÄTMED</router-link></li>
        <li><router-link to="/biojaatmed">BIOJÄÄTMED</router-link></li>
        <li><router-link to="/pakendijaatmed">PAKENDIJÄÄTMED</router-link></li>
        <li>VANAPABER</li>
        <li>ELEKTROONIKAJÄÄTMED</li>
        <li>AKUD JA PATAREID</li>
        <li>RÕIVAD JA TEKSTIIL</li>
        <li>PLASTJÄÄTMED</li>
        <li>PÕLLUMAJANDUSPLAST</li>
        <li>KLAASIJÄÄTMED</li>
        <li>PUIDUJÄÄTMED</li>
        <li>METALLIJÄÄTMED</li>
        <li>SUURJÄÄTMED</li>
        <li>OHTLIKUD JÄÄTMED</li>
        <li>VANAREHVID</li>
        <li>ROMUSÕIDUKID</li>
        <li>EHITUS-JA LAMMUTUSJÄÄTMED</li>
    </ul>
</template>