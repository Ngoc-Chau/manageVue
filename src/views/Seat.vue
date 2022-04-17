<template>
    <div :class="!propsBlockA.employees.name ? 'bgSeat' : '' ">
        <span class="tooltiptext" v-if="propsBlockA.employees.name">
            <div
                class="d-flex tooltip-head"
                style="padding: 5px 0"
            >
                <a
                href=""
                data-toggle="modal"
                data-target="#delUser"
                >
                    <i class="fa fa-trash-o"></i>
                </a>
                <a @click="$emit('transfer', propsBlockA )">
                    <i class="fa fa-refresh"></i>
                </a>
                <span style="margin: 0 35px 0 35px">Thong tin</span>
                <a href="">
                    <i class="fa fa-close"></i>
                </a>
            </div>
            <div class="toolborder">
                <p style="text-align: center">ID: {{ propsBlockA.employees.id }}</p>
                <p>Ho va ten: {{ propsBlockA.employees.name }}</p>
                <p>Email: {{ propsBlockA.employees.other_email }}</p>
                <p>Don vi: {{ propsBlockA.employees.department_code }}</p>
                <p>Chuc vu: {{ propsBlockA.employees.job_title_code }}</p>
            </div>
        </span>
        <div v-if="!propsBlockA.employees.name">
            <a href="" class="blank" data-toggle="modal"
                    data-target="#addSeat"
                    data-whatever="@mdo">
                <p>
                    <a
                    data-toggle="modal"
                    data-target="#addSeat"
                    data-whatever="@mdo"
                    >
                        <i class="check fa fa-close"></i>
                    </a>
                </p>
                <p class="seat-name">Chỗ đang trống</p>
                <p>{{ propsBlockA.seat_id }}</p>
            </a>
        </div>
        <div v-else>
            <p><i class="check fa fa-check"></i></p>
            <p class="seat-name">{{ propsBlockA.employees.name }}</p>
            <p>{{ propsBlockA.seat_id }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Seat',
    props: ['propsBlockA'],
    // emits: ['transfer'],
    // methods: {
    //   transfer(item) {
    //     this.$emit('transfer-cart', item)
    //   }
    // }
}
</script>

<style scoped>
/* blank */
.bgSeat {
    background: #1c311c9c;
}
.blank {
    color: black;
}
.blank:hover {
    text-decoration: none;
    color: rgba(241, 241, 241, 0.979);
}


.seat {
  border: 2px solid;
  margin: 2px;
  line-height: 18px;
  font-weight: bolder;
  width: 23%;
  height: 150px;
  text-align: center;
}
.seat:hover {
  background: #1ea11a;
}
.seat-name {
    height: 60px;
    margin: 0 1px 12px 1px;
    font-size: 13px;
}
.check {
  margin-top: 10px;
}

.tool-tip {
  position: relative;
  display: inline-block;
}
.tool-tip .tooltiptext {
  visibility: hidden;
  width: 220px;
  background-color: #fff;
  color: black;
  text-align: left;
  border-radius: 6px;
  border: 2px solid;
  padding: 0 10px 10px 10px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 0%;
  /* margin-left: -60px; */
}
.tool-tip:hover .tooltiptext {
  visibility: visible;
}
.tool-tip .tooltip-head a {
  color: black;
}
.tool-tip .tooltip-head a:hover {
  color: blue;
}
.tool-tip .toolborder {
  border-radius: 6px;
  border: 2px solid;
  padding: 10px;
  font-weight: normal;
}
.tool-tip .toolborder p {
  margin: 5px 0;
}
</style>