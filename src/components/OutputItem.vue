<template>
  <article :class="{ active: task.isActive, completed: task.completed }" class="v-stretch">
    <section class="content grow top-edge flex-row">
      <h1 class="title">{{task.title}}</h1>
    </section>
    <section class="controls flex-row bottom-edge">
      <div class="flex-row">
      <button class="button--delete" @click="deleteTask()">Clear</button>
      </div>
      <div class="flex-row">
        <p v-if="task.stoppedAt" class="reward">👍<span v-if="task.times > 1" class="reward-times">x{{task.times}}</span></p>
        <p v-if="task.startedAt" class="completion-time">
          {{task.isActive ? activeTime : completionTime}}<span class="unit">min</span>
        </p>
        <button 
          class="button--done"
          v-if="task.isActive"
          @click="stopTask()">
          Done 
        </button>
        <button 
          class="button--start"
          v-if="!task.isActive && !task.completed"
          @click="startTask()">
          Start
        </button>
        <button 
          class="button--start"
          v-if="!task.isActive && task.completed"
          @click="startTask()">
          Again
        </button>
      </div>
    </section>
  </article>
</template>

<script>
import { format, differenceInMinutes } from "date-fns";
// import { db } from "@/database";

export default {
  name: "TaskItem",
  props: {
    task: Object
  },
  data() {
    return {
      timer: null,
      currentDate: new Date()
    };
  },
  computed: {
    startedAt() {
      return new Date(this.task.startedAt);
    },
    completionTime() {
      // update completion time
      if (this.task.completed === false) return null;
      let difference = differenceInMinutes(
        this.task.stoppedAt,
        this.task.startedAt
      );
      difference = difference > 0 ? difference : 1; // minimum 1 minute
      return difference;
    },
    activeTime() {
      return differenceInMinutes(this.currentDate, this.task.startedAt);
    }
  },
  methods: {
    formatDate(date, formatString) {
      return format(date, formatString);
    },
    startTask() {
      this.$store.dispatch("startTask", this.task);
      this.updateCurrentDate();
      this.updateDateEverySecond();
    },
    stopTask() {
      this.$store.dispatch("stopTask", this.task);
      clearInterval(this.timer);
    },
    deleteTask() {
      this.$store.dispatch("removeTask", this.task);
    },
    updateCurrentDate() {
      this.currentDate = new Date();
    },
    updateDateEverySecond() {
      this.timer = setInterval(this.updateCurrentDate, 1000);
    }
  },
  created() {
    if (this.task.isActive) {
      this.updateDateEverySecond();
    }
  }
};
</script>

<style scoped>
.invisible {
  visibility: hidden;
}
.grow {
  flex-grow: 1;
}
.v-stretch {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-edge {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.bottom-edge {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
article {
  flex-grow: 1;
  margin: 10px;
  min-width: 240px;
  max-width: 360px;
  background: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}
article > section {
  padding: 15px;
}
.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin: 0;
  font-weight: normal;
  font-size: 1.5em;
}
.reward {
  font-size: 1.5em;
  margin-left: 30px;
  margin-right: 15px;
}
.active h1 {
  font-weight: 900;
}
p {
  margin: 0;
}
.active {
  font-weight: bold;
}
.completion-time {
  margin-right: 15px;
  font-size: 1.5em;
}
.reward-times {
  margin-left: 2px;
  font-size: 0.5em;
}
.unit {
  margin-left: 2px;
  font-size: 0.5em;
}
.status {
  font-size: 0.8em;
  margin-right: 15px;
}
.date-label {
  font-size: 0.8em;
}
.content {
  padding: 30px;
  background: rgb(255, 255, 255);
}
.controls {
  background: rgba(255, 255, 255, 0.8);
}
.button--start {
  color: #111;
  background: rgba(255, 255, 255, 1);
}
.button--done {
  color: white;
  background: rgba(0, 0, 0, 0.8);
}
.button--delete {
  background: white;
}
</style>
