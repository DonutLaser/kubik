import { emit, Event } from "./event-bus";

let open = false;

export function openSearch() {
    open = true;
    emit(Event.SearchOpened);
}

export function closeSearch() {
    open = false;
    emit(Event.SearchClosed);
}

export function toggleSearch() {
    if (open) {
        closeSearch();
    } else {
        openSearch();
    }
}

export function findPattern(pattern: number[][]) {
    emit(Event.SearchRequested, pattern);
}

export function isSearchOpen(): boolean {
    return open;
}
