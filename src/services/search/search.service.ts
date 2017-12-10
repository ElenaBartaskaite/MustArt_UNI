import { Injectable } from '@angular/core';
import { Color } from '../../models/color';

import { SortModes } from '../../models/sort-modes';
import { List } from '../../models/list';
import { DisplayModes } from '../../models/display-modes';
import { Image } from '../../models/image';

@Injectable()
export class SearchService {

    // Sorting
    sortMode: SortModes = SortModes.Newest;

    // Filtering
    keywords: string[];
    matchingColors: Color[];
    dominantColors: Color[];
    fromDate: Date = new Date(2017, 1, 1);
    toDate: Date = new Date();
    resolutions: List<string>;

    // Display
    displayMode: DisplayModes = DisplayModes.Normal;

    images: Image[];

    constructor() {
    }

    Search() {
    }
}
