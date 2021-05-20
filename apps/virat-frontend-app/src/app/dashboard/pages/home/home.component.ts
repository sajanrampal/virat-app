/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'virat-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers:[HomeService]
  })
export class HomeComponent implements OnInit{
    title:string
    assignees:any=[];
    issues:any = [];
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    labelQueryParams:string = '';
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    issueStatusQueryParams:string = 'all';
    labels:any = [];
    issuesStatus = [
        {
            id:3,
            name:'all'
        },
        {
            id:1,
            name:'open'
        },
        {
            id:2,
            name:'closed'
        }
]
    constructor(public readonly router: Router,private readonly dataService: HomeService){}

    ngOnInit(){
        this.getAssignee();
        this.getLabel();
        this.getIssues();
    }

    getReport(){
        this.downloadFile(this.issues, 'GitHubReport')
    }

    downloadFile(data, filename = 'data') {
        const csvData = this.GenerateCSV(data);
        const blob = new Blob(['\ufeff' + csvData], {
            type: 'text/csv;charset=utf-8;',
        });
        const dwldLink = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const isSafariBrowser =
            navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute('target', '_blank');
        }
        dwldLink.setAttribute('href', url);
        dwldLink.setAttribute('download', filename + '.csv');
        dwldLink.style.visibility = 'hidden';
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    
    GenerateCSV(objArray) {
        const array =
            typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        let row = 'S.No,';
        const headerList = Object.keys(objArray[0]);
        for (const index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (let i = 0; i < array.length; i++) {
            let line = i + 1 + '';
    
            for (const index in headerList) {
                const head = headerList[index];
                if (array[i][head] === false || array[i][head] === 'false') {
                    array[i][head] = 'Close';
                } else if (
                    array[i][head] === true ||
                    array[i][head] === 'true'
                ) {
                    array[i][head] = 'Open';
                }
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    }

    getIssues(){
        this.issues = [];
        // eslint-disable-next-line prefer-const
        let queryParams = `state=${this.issueStatusQueryParams}&labels=${this.labelQueryParams}`;
        this.dataService.getIssues(queryParams).subscribe((res:any)=>{
            console.log(res)
            
            res.forEach((element,index) => {
                // eslint-disable-next-line prefer-const
                let obj = {
                    // srNo:index+1,
                    issueTitle:element.title,
                    issueUrl:element.html_url,
                    status:element.state

                }

                this.issues.push(obj)
            });
        })
    }

    getAssignee(){
        this.dataService.getAssignee().subscribe(res=>{
            this.assignees = res;
        })
    }

    getLabel(){
        this.dataService.getLable().subscribe(res=>{
            this.labels = res;
        })
    }

    onIssueStatusChange(event){
        this.issueStatusQueryParams = event.target.value
        // console.log(event.target.value)
    }

    onLabelChange(event){
        this.labelQueryParams = event.target.value
        // console.log(event.target.value)
    }

    // sortCallBack(event){
    //     console.log(event)
    // }

    // searchCallBack(event){
    //     console.log(event)
    // }

    goToTasks(){
        this.router.navigate(['/dashboard', 'tasks']);
    }

    goToTask(){
        this.router.navigate(['/dashboard', 'task']);
    }
}