import { GenericEntry } from '@my/app/utils/entries/types';
import moment from 'moment';

export const sortedInsert = (entries: GenericEntry[], entry: GenericEntry) => {
    // Check if the list is empty, insert at the beginning if so
    if (entries.length === 0) {
        entries.push(entry);
        return entries;
    }

    // Binary search for the correct insertion index to maintain sorting by timestamp
    let left = 0;
    let right = entries.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (moment(entries[mid].timestamp).isSame(entry.timestamp)) {
            // Insert at the exact match (you could customize this behavior if needed)
            left = mid;
            break;
        } else if (moment(entries[mid].timestamp).isBefore(entry.timestamp)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    entries.splice(left, 0, entry);
    return entries;
}
