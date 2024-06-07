/**
 * 中文字符集 （簡體字）
 */
export default {
  message: {
    base:{
      cancel:"取 消",
      ok:"確 定",
      back:"返回",
      required:"必填",
      sysError: '系統錯誤',
      noLogin:"登錄信息已經失效",
      noLoginInfo:"登錄信息已經超時，請重新登錄！",
      apiError:"接口返回格式錯誤，未包含result值。",
      add:"新增",
      modify:"修改",
      delete:"删除",
      err1:"未勾選數據",
      confirm:"是否確認?",
      select:"請選擇",
      oper:"操作",
      noData:"無數據",
      load:"數據加載中...",
    },
    login: {
      lang:"語言",
      userLogin: "用戶登錄",
      userName: '用戶名',
      psd: "密碼",
      login:"登錄",
      nameError: '請輸入用戶名',
      psdError: '請輸入密碼',
      prompt: '賬號/密碼： admin/123456',
      loginError: '登錄錯誤',
      userError: '賬號不存在或密碼錯誤!',
      copyright:"©成都睿思商智科技有限公司 2024 版權所有"
    },
    main:{
      sysIntro:'<b>「睿思BI」</b>商業智能系統是由<a href="http://www.ruisitech.com">成都睿思商智科技有限公司</a>自主研發的，具有自主知識產權的企業數據分析系統。開源版包含數據建模、多維分析、數據報表、權限管理等功能模塊，方便企業快速建立一套易用，靈活、零成本的商業能平臺，通過數據掌握企業經營情況，以數據支撐決策。',
      module:'開源版功能模塊',
      moduleIntro:'<p>1.數據建模</p><p>2.多維分析</p><p>3.數據報表</p><p>4.權限管理</p>',
      buyUltimate:'購買旗艦版',
      start:"快速開始",
      qq:"技術交流QQ群",
      more:"如果您需要更多功能，可以",
      indexName:"首頁",
      user:{
        info:"個人信息",
        psd:"修改密碼",
        question:"問題反饋",
        book:"使用手冊",
        out:"退出登錄",
        outSuccess:"退出成功"
      },
      info:{
        loginName:"登錄名",
        userName:"用戶名",
        company:"所屬企業",
        state:"賬號狀態",
        cnt:"登錄次數",
        lastLogDate:"上次登錄時間",
        uinfo:"個人信息",
        times:"次",
        compName:"成都睿思商智科技有限公司",
        enable:"啟用",
        disable:"停用",
      },
      psd:{
        title:"修改密碼",
        old:"原始密碼",
        new:"新密碼",
        confirm:"重復密碼",
        length:"密碼長度6到18位",
        error:"原始密碼錯誤",
        error2:"兩次密碼不一致",
        success:"密碼修改成功"
      },
      navMenu:{
        flash:"刷新當前頁面",
        closeother:"關閉其他頁面",
        closeall:"關閉全部頁面",
        left:"左移選項卡",
        right:"右移選項卡",
      }
    },
    manage:{
      user:{
        name:"用戶管理",
        id:"標識",
        staff:"工號",
        userName:"用戶名",
        state:"狀態",
        logTimes:"登錄次數",
        logDate:"登錄時間",
        userRole:"授權角色",
        userMenu: "授權菜單",
        man:"男",
        woman:"女",
        newUser:"新增用戶",
        modifyUser:"修改用戶",
        staffNote:"登錄系統使用",
        password:"登錄密碼",
        password2:"重復密碼",
        sex:"性別",
        mobilePhone:"手機號碼",
        officeTel:"辦公電話",
        email:"電子郵件",
        suc1:"用戶修改成功",
        suc2:"用戶創建成功",
        suc3:"授權成功",
        suc4:"用戶刪除成功",
        exist:"賬號已經存在。",
      },
      userMenu:{
        name:"用戶管理 >> 所轄菜單",
        open:"全部展開",
        close:"全部關閉",
         suc:"授權成功"
      },
      role:{
        name:"角色管理",
        roleMenu: "授權菜單",
        id:"標識",
        name:"角色名稱",
        desc:"備註信息",
        createUser:"創建人",
        createDate:"創建時間",
        ord:"排序",
        add:"新增角色",
        mod:"修改角色",
        suc:"用戶刪除成功",
      },
      roleMenu: {
        name:"角色管理 >> 所轄菜單",
        suc:"角色授權成功",
      },
      menu:{
        name:"菜單管理",
        note:"在菜單上點擊鼠標右鍵來新建或編輯菜單。",
        menuName:"名稱",
        menuUrl:"URL",
        menuOrder:"排序",
        menuDesc:"備註",
        pic:"圖標",
        root:"系統菜單",
        urlNote:"如果創建目錄則不用填寫URL",
        err1:"菜單只能建3級",
        modify:"修改菜單",
        add:"創建菜單",
      }
    },
    model:{
      title:"數據建模",
      dsource:{
        title:"數據源",
        name:"數據源名稱",
        use:"類型",
        linkType:"數據源類型",
        linkUrl:"連接字符串",
        linkName:"連接用戶名",
        psd:"連接密碼",
        suc1:"刪除成功！",
        jndiName:"JNDI名稱",
        test:"測試鏈接",
        crt:"創建數據源",
        update:"修改數據源",
        suc2:"測試成功",
        err2:"請先點擊測試連接，連接成功後再點擊確定按鈕",
        suc3:"數據源修改成功",
        suc4:"數據源創建成功",
      },
      dset:{
        title:"數據集",
        flush:"刷新",
        crt:"創建數據集",
        update:"編輯數據集",
        name:"名稱",
        priTable:"主表",
        dsname:"數據源",
        useType:"連接",
        base:"基本信息",
        join:"表關聯",
        search:"搜索表",
        err1:"請選擇表",
        suc1:"刷新成功",
        stable:"選擇表",
        stable2:"待選表",
        stable3:"已選表",
        cols:"表字段",
        err2:"未選擇主表",
        join2:"關聯",
        err3:"表 {id} 未和主表關聯。",
        err4:"您還未選擇需要移除的表。",
        err5:"不能移除主表。",
        err6:"請選擇字段再點關聯",
        view:"數據預覽",
        dyna:{
          title:"動態字段",
          title2:"創建表達式(主表)",
          name:"字段名",
          expression:"表達式",
          eng:"英文字符",
          type:"字段類型",
          note:"表達式說明",
          expnote:"表達式是一句SQL片段，用來提高系統靈活性。<li>通過表達式來對字段進行運算；</li>字段相加：<div class=\"mycode\"> a+ b</div><li>對字段進行case when 轉換；</li><div class=\"mycode\">case when a=1 then '是' when a=2 then '否' else '未知' end</div><p class=\"text-warning\">請註意：此處表達式請勿使用sum/avg/max/min/count等聚合函數。",
          err2:"字段名必須是英文字符。",
        },
        col:{
          title:"編輯字段",
          name:"字段名",
          dispName:"顯示名",
          type:"字段類型",
          tname:"來源表",
          join:"關聯字段",
          err1:"字段無關聯",
        },
        joinInfo:{
          title:"表關聯",
          master:"主表",
          col:"字段",
          slave:"從表",
          joinType:"關聯方式",
          left:"左連接",
          right:"右連接",
          inner:"全連接"
        }
      },
      cube:{
        title:"立方體",
        id:"標識",
        name:"立方體名稱",
        desc:"立方體說明",
        dsetName:"數據集",
        add:"創建立方體",
        modify:"編輯立方體",
        base:"基本信息",
        cubeInfo:"立方體信息",
        cols:"待選字段",
        dimKpis:"維度和度量",
        group:"維度分組",
        calc:"計算度量",
        auto:"自動生成立方體",
        cname:"數據立方體",
        dim:"維度",
        kpi:"度量",
        err1:"未選擇維度",
        err2:"還未配置度量。",
        err3:"您還未從左邊選擇字段。",
        err4:"請選擇字段。",
        err5:"您還未選擇右邊度量或維度。",
        err6:"您還未選擇需要刪除的度量或維度。",
        err7:"您要刪除的分組含有維度，不能刪除。",
        err8:"您要刪除的分類下含有度量，不能刪除。",
        err9:"未勾選維度或度量。",
        suc1:"立方體配置成功。",
      },
      group:{
        title:"創建維度分組",
        name:"分組名稱",
      },
      exp:{
        add:"創建表達式度量",
        modify:"修改表達式度量",
        err1:"度量標識只能是英文字符。",
        alias:"度量標識",
        kpiname:"顯示名稱",
        expression:"表達式",
        kpiaggre:"計算方式",
        kpiunit:"度量單位",
        kpifmt:"格式化",
        kpinote:"指標解釋",
        note1:"表達式度量說明",
        note2:"表達式度量是一句SQL片段，用來提高系統靈活性。<li>通過表達式來對度量進行運算；</li>字段相加：<div class=\"mycode\"> sum(a)+sum(b) </div>或：<div class=\"mycode\"> sum(a + b) </div><li>數據量計數；</li><div class=\"mycode\">count(*)</div><p class=\"text-warning\">請註意：此處創建的表達式度量必須使用sum/avg/max/min/count等聚合函數。</p>"
      },
      fmt:{
        int:"整數",
        double:"小數(保留兩位)",
        double2:"小數(保留四位)",
        percentage:"百分比",
      },
      nodeModify:{
        title:"編輯維度及度量",
        colDim:"維度字段",
        colKpi:"度量字段",
        alias:"別名",
        dimname:"顯示名稱",
        dimtype:"維度類型",
        dateformat:"維度格式",
        colTable:"維度對應表",
        colkey:"維度Key字段",
        coltext:"維度Text字段",
        dimord:"排序方式",
        kpiaggre:"計算方式",
        kpiunit:"度量單位",
        kpifmt:"格式化",
        kpinote:"度量解釋",
        asc:"升序",
        desc:"降序",
        err1:"請選擇時間維度類型。",
      },
      dimTypes:{
        frd:"未選擇",
        year:"年",
        quarter:"季度",
        month:"月份",
        day:"日期",
        prov:"省份",
        city:"地市",
        town:"區縣",
      }
    },
    report:{
      index:{
        new:"新建報表",
        note:"定製個性化的數據可視化界面",
        title:"報表列表",
        customization:"定製",
        view:"查看",
        share:"分享",
        pageId:"標識",
        pageName:"報表名稱",
        userName:"創建人",
        crtDate:"創建時間"
      },
      cust:{
        save:"保存",
        layout:"布局",
        data:"數據",
        data1:"選擇立方體",
        data2:"選擇數據表",
        view:"預覽",
        saveReport:"報表保存",
        name:"報表名稱",
        err1:"您還未保存報表，是否確認退出？",
        err2:"報表還未保存，不能預覽!",
        suc1:"保存成功",
        suc2:"更新成功!",
      },
      left:{
        comp:"組件",
        cube:"立方體",
        dset:"數據表",
        params:"參數",
        input:"輸入框",
        radio:"單選框",
        checkbox:"多選框",
        dateselect:"日歷框",
        monthselect:"月份框",
        yearselect:"年份框",
        text:"文本",
        box:"數據塊",
        chart:"圖表",
        grid:"表格",
        table:"交叉表",
        err1:"您還未選擇數據集",
        err2:"您還未選擇立方體",
      },
      param:{
        err1:"把參數拖放此處",
        set:"設置",
        left:"左移",
        right:"右移",
        err2:"參數已在最左邊，無法移動。",
        err3:"參數已在最右邊，無法移動。",
        paramid:"參數標識",
        paramname:"顯示名稱",
        dtformat:"時間格式",
        minval:"最小值",
        maxval:"最大值",
        defvalue:"默認值",
        hiddenprm:"隱藏參數",
        note:"隱藏參數不會在頁面中顯示",
        valueList:"值列表",
        static:"靜態值",
        dynamic:"動態值",
        data:"數據",
        alias:"映射字段",
        note1:"參數默認值",
        note2:"now 表示當前時間, now - 1 表示前一天",
        addv:"添加值",
        modv:"修改值",
        err4:"您還未設置參數值。",
        err5:"您的參數還未綁定到數據。",
        err6:"未設置時間格式。",
        add2:"創建參數",
      },
      opt:{
        set:"設置組件",
        rem:"刪除組件",
        prop:"屬性",
        charttype:"圖表類型",
        data:"數據",
        filter:"篩選",
        event:"事件",
      },
      text:{
        title:"請輸入文本內容 - 文本框",
        note:"請錄入文本內容",
        name:"文本"
      },
      textProp:{
        prop:"文本屬性",
        showtitle:"是否顯示標題",
        title:"標題",
        talign:"位置",
        bgcolor:"背景顏色",
        font:"文本字體",
        tfontsize:"字體大小",
        tfontcolor:"字體顏色",
        tfontweight:"是否粗體",
        titalic:"是否斜體",
        tunderscore:"是否下劃線",
      },
      box:{
        note:"點擊<i class=\"fa fa-wrench\"></i>按鈕配置",
        text:"文本屬性",
        title:"標題",
        unit:"單位",
        fmt:"格式化",
        rate:"度量比例",
        fontsize:"字體大小",
        color:"字體顏色",
        bgcolor:"背景顏色",
        dataName:"數據塊度量",
        dataNote:"拖拽度量到此處",
        err1:"只能拖拽度量到數據塊中顯示。",
      },
      right:{
        title:"屬性面板",
      },
      bottom:{
        title:"數據面板"
      },
      view:{
        export:"導出",
        print:"打印",
        print2:"報表打印",
      },
      filter:{
        title:"組件篩選",
        add:"新增篩選條件",
        col:"篩選字段",
        type:"判斷條件",
        val:"篩選值",
        valuetype:"值類型",
        gdz:"固定值",
        param:"鏈接到參數",
        value2:"篩選值2",
        string:"字符類型",
        number:"數字類型",
        err1:"組件還未定義數據，不能定義篩選。",
      }
    },
    olap:{
      selcube:{
        title:"選擇數據模型",
        search:"輸入關鍵字搜索",
        name:"模型名稱",
        note:"說明",
        dset:"數據集",
      }
    }
  }
}