import { Template } from 'meteor/templating';
import {ReactiveVar} from "meteor/reactive-var";
import './App.html';
import './App.css';

Template.MainContainer.onCreated(function () {
    this.table = new ReactiveVar(
        [
            { id: 'id1', value: "-1" },
            { id: 'id2', value: "-1" },
            { id: 'id3', value: "-1" },
            { id: 'id4', value: "-1" },
            { id: 'id5', value: "-1" },
            { id: 'id6', value: "-1" },
            { id: 'id7', value: "-1" },
            { id: 'id8', value: "-1" },
            { id: 'id9', value: "-1" }
        ]
    );
});

Template.MainContainer.helpers({
    allCells() {
        return Template.instance().table.get();
    }
});
