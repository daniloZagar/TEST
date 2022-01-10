<script>
import { Bar } from 'vue3-chart-v2';

export default {
  extends: Bar,
  props: {
    labels: {
      type: Array,
      default: () => {},
    },
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.chartData,
            borderColor: '#077187',
            pointBorderColor: '#0E1428',
            pointBackgroundColor: '#AFD6AC',
            backgroundColor: '#ECECEC',
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          fontColor: 'white',
        },

        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
            },
          ],
        },
      }
    );
  },
};
</script>
