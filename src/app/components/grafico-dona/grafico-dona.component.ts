
import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
    selector: 'app-grafico-dona',
    templateUrl: './grafico-dona.component.html',
    styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

    @Input() doughnutChartData: MultiDataSet = [];
    @Input() doughnutChartLabels: Label[] = [];
    @Input() doughnutChartType: ChartType = 'doughnut';

    constructor() {}

    ngOnInit() {}

}