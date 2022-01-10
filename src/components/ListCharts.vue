<script>
import { Line } from 'vue3-chart-v2';

export default {
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
  },
  watch: {
    // Overwriting base render method with actual data.
    chartData: function () {
      this.renderChart({
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: this.label,
            data: this.chartData,
          },
        ],
      });
    },
  },
};
</script>
