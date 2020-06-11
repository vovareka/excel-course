import './scss/index.scss'
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Fotmula} from '@/components/formula/Fotmula';
import {Table} from '@/components/table/Table';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Fotmula, Table]
})

excel.render()
